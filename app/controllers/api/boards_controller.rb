class Api::BoardsController < ApplicationController
  def index
    @boards = current_user.boards
  end

  def create
    @board = Board.new(board_params)
    @board.owner = current_user
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    if @board && @board.owner == current_user
      render 'api/boards/show_detail'
    else
      render json: ['Board not found'], status: 404
    end
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end