---
layout: default
title: Explorations
group: "in_local_navigation"
order: 5
---
## Exploring

Here are some recent things I've been looking into, perhaps you'll find them interesting.

<div>
{% for update in site.posts %}
  {% if update.tag == "explorations" %}
    <div class="padding-bottom-xlarge padding-top-xlarge padding-left-large padding-right-large callout">
      <span>{{ update.date | date_to_string }}</span>

      <h3><a href="{{ update.url }}" title="{{ update.title }}">{{ update.title }}</a></h3>
      {{ update.content }}
    </div>
  {% endif %}
{% endfor %}

</div>
