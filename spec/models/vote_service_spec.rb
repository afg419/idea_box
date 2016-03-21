require 'rails_helper'

RSpec.describe VoteService, type: :model do
  it "keeps numbers within 0 to 2" do
    vs = VoteService.new({idea: {}})
    expect(vs.keep_within_bounds(-1)).to eq 0
    expect(vs.keep_within_bounds(0)).to eq 0
    expect(vs.keep_within_bounds(1)).to eq 1
    expect(vs.keep_within_bounds(2)).to eq 2
    expect(vs.keep_within_bounds(3)).to eq 2
  end

  it "executes a vote" do

  end
end
