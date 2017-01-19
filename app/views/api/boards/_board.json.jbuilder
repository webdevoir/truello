json.extract! board, :id, :name, :owner_id
json.owner do
  json.extract! board.owner, :username
end
