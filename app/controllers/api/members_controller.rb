class Api::MembersController < ApplicationController
  def create
    @user = User.find(params[:member][:id])
    @sharing = Sharing.new(member_id: @user.id,
                           board_id: params[:board_id])
    if @sharing.save
      render 'api/users/show'
    else
      render json: @sharing.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @sharing = Sharing.find_by(board_id: params[:board_id],
                               member_id: @user.id)
    if @sharing.destroy
      render 'api/users/show'
    else
      render json: @sharing.errors.full_messages, status: 422
    end
  end
end
