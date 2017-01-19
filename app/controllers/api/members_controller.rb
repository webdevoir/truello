class Api::MembersController < ApplicationController
  def create
    @user = User.find(member_params[:id])
    @sharing = Sharing.new(member_id: @user.id,
                           board_id: params[:board_id])
    if @sharing.save
      render 'api/users/show'
    else
      render json: @sharing.errors.full_messages, status: 422
    end
  end

  private

  def member_params
    params.require(:member).permit(:id)
  end
end
