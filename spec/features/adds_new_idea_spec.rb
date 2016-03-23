require 'rails_helper'

RSpec.feature "deletes idea", type: :feature do
  scenario "A user deletes an idea", :js => true do
    VCR.use_cassette 'adds-idea' do
      visit root_path

      expect(page).to_not have_content "Title0"
      expect(page).to_not have_content "Body0"

      fill_in 'new-idea-title', with: "Title0"
      fill_in 'new-idea-desc', with: "Body0"
      click_on 'submit-new-idea'

      expect(page).to have_content "Title0"
      expect(page).to have_content "Body0"
    end
  end
end
