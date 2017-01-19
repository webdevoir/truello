class Api::UsersController < ApplicationController
  def index
    board = Board.find(params[:board_id])
    @users = [board.owner] + board.members
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @users = User.where("lower(username) ~ ?", params[:query].downcase)
      board = Board.find(params[:board_id])
      @users = @users.select do |user|
        board.owner_id != user.id && !board.members.include?(user)
      end
    else
      @users = User.none
    end

    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
