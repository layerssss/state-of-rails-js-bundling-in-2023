# frozen_string_literal: true

module ApplicationHelper
  def all_javascript_include_tags(**kwargs)
    manifest = Rails.root.join('app/assets/builds/assets-manifest.json').read
    manifest = JSON.parse(manifest)
    capture do
      manifest.each do |key, value|
        next unless key.end_with?('.js')

        concat javascript_include_tag(value, **kwargs)
      end
    end
  end
end
