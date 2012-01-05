<div class="panel-display omega-12-twocol-6-6-stacked" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="panel-panel grid-12">
    <div class="inside"><?php print $content['top']; ?></div>
  </div>
  <div class="panel-panel grid-6 alpha">
    <div class="inside"><?php print $content['left']; ?></div>
  </div>
  <div class="panel-panel grid-6 omega">
    <div class="inside"><?php print $content['right']; ?></div>
  </div>
  <div class="panel-panel grid-12">
    <div class="inside"><?php print $content['bottom']; ?></div>
  </div>
</div>
