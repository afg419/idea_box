require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "creates a new item" do
    expect(Idea.count).to eq 0
    post :create, create_idea_params(0)

    expect(response.body).to eq "created idea Title0"
    expect(response.status).to eq 200

    expect(Idea.count).to eq 1
    expect(Idea.first.title).to eq "Title0"
  end
end
