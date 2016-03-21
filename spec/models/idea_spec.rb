require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:quality) }
    it { is_expected.to validate_uniqueness_of(:title) }
  end
end
