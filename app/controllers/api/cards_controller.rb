class Api::CardsController < ApplicationController
  def index
    @cards = Card
      .joins(:list)
      .where("lists.board_id = ?", params[:board_id])
    render :index
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def show
    @card = Card.find(params[:id])
    if @card
      render :show
    else
      render json: ['Card not found'], status: 404
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update_attributes(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find(params[:id])
    if @card.destroy
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :description, :list_id)
  end
end
