json.board do
  json.partial! 'board', board: @board
end
json.lists do
  @board.lists.each do |list|
    json.set! list.id do
      json.extract! list, :id, :name
      json.cards do
        list.cards.each do |card|
          json.set! card.id do
            json.extract! card, :id, :name, :description
          end
        end
      end
    end
  end
end
