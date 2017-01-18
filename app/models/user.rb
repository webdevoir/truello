class User < ApplicationRecord
  validates :username,
            :password_digest,
            :session_token,
            presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :boards,
           primary_key: :id,
           foreign_key: :owner_id,
           class_name: :Board,
           dependent: :destroy

  has_many :sharings,
           primary_key: :id,
           foreign_key: :member_id,
           class_name: :Sharing,
           dependent: :destroy

  has_many :shared_boards,
           through: :sharings,
           source: :board

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def all_boards
    boards + shared_boards
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
