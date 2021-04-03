class Pattern < ApplicationRecord
    validates :author_id, presence: true
end
