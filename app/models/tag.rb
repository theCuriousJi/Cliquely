class Tag < ActiveRecord::Base
  validates_inclusion_of :name, in: ['Media', 'News', 'Restaurants / Bars', 'Life Pro Tips', 'Random']
  validates :name, uniqueness: true, presence: true

end
