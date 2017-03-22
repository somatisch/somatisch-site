---
layout: default
title: Recipes
group: "in_local_navigation"
order: 4
---
## Recipes, Models, and Heuristics

Here is a place where you can find somatisch.io methods, models, problem solving techniques, and tools.

<!-- - strategy
- methodology
- product and solution development
- forecasting
- valuation
- management -->

<!--  overview list -->
<div class="row">
<div class="callout columns medium-8 medium-push-2">
<h3>Table of contents</h3>
<ul>
{% comment %}
We construct the site recipes by loading a list of the site's pages
and filtering to just those with the front matter of:
  group: "recipes"
and we order by adding
  order: 2 (whatever number)
{% endcomment %}
{% assign recipes_list = site.pages | sort:"order" %}
{% assign group = 'recipes' %}
{% for item in recipes_list %}
  {% if group == null or group == item.group %}
    <span class="">
      {% if page.url == item.url %}
        <li><a href="{{item.url}}" class="active">{{item.title}}</a></li>
      {% else %}
        <li><a href="{{item.url}}">{{item.title}}</a></li>
      {% endif %}
    </span>
  {% endif %}
{% endfor %}
</ul>
</div>
</div>


<!-- content readout -->
<div>
<ul>
{% for item in recipes_list %}
  {% if group == null or group == item.group %}
    <span class="">
      <div markdown="1">{{ item.content }}</div>
    </span>
  {% endif %}
{% endfor %}
</ul>
</div>

<!-- Cleanup -->
{% assign recipes_list = nil %}
{% assign group = nil %}
