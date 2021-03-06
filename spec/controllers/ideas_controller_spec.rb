require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "replies with all indexed ideas" do
    create_ideas(3)
    get :index

    reply = JSON.parse(response.body)

    expect(reply.length).to eq 3
    reply.each_index do |i|
      expect(reply[i]["title"]).to eq "Title#{i}"
      expect(reply[i]["body"]).to eq "Body#{i}"
      expect(reply[i]["quality"]).to eq i
    end
    expect(response.status).to eq 200
  end
end
