require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "replies with all indexed ideas" do
    create_ideas(3)
    get :index

    reply = JSON.parse(response.body)

    expect(reply.length).to eq 3
    reply.each_index do |i| #2-i because they are ordered by created at
      expect(reply[i]["title"]).to eq "Title#{2-i}"
      expect(reply[i]["body"]).to eq "Body#{2-i}"
      expect(reply[i]["quality"]).to eq 2-i
    end
    expect(response.status).to eq 200
  end
end
