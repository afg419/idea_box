require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "upvotes an idea" do
    idea = Idea.create(title: "t1", body: "b1", quality: 0)
    post :vote, idea_id: idea.id, idea: {vote: 1}
    idea.reload

    expect(idea.quality).to eq 1
    reply = JSON.parse(response.body)

    expect(reply["title"]).to eq idea.title
    expect(response.status).to eq 200

    idea = Idea.create(title: "t2", body: "b2", quality: 1)
    post :vote, idea_id: idea.id, idea: {vote: 1}
    idea.reload
    expect(idea.quality).to eq 2

    idea = Idea.create(title: "t3", body: "b3", quality: 2)
    post :vote, idea_id: idea.id, idea: {vote: 1}
    idea.reload
    expect(idea.quality).to eq 2

  end

  it "downvotes an idea" do
    idea = Idea.create(title: "t1", body: "b1", quality: 0)
    post :vote, idea_id: idea.id, idea: {vote: -1}
    idea.reload
    expect(idea.quality).to eq 0

    idea = Idea.create(title: "t2", body: "b2", quality: 1)
    post :vote, idea_id: idea.id, idea: {vote: -1}
    idea.reload
    expect(idea.quality).to eq 0

    idea = Idea.create(title: "t3", body: "b3", quality: 2)
    post :vote, idea_id: idea.id,  idea:{vote: -1}
    idea.reload

    reply = JSON.parse(response.body)

    expect(idea.quality).to eq 1
    expect(reply["title"]).to eq idea.title

    expect(response.status).to eq 200
  end

  it "alerts user if they tried to vote on something that doesnt exist" do
    post :vote, idea_id: 1, idea: {vote: -1}
    expect(response.body).to eq "something went wrong..."
    expect(response.status).to eq 200
  end

end
