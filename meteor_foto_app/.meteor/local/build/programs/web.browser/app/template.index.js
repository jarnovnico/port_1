(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.HEADER("\n		", HTML.Raw("<h1>Foto app</h1>"), " ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n	"), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n		", HTML.MAIN("\n			", HTML.DIV({
      "class": "container"
    }, "	\n				", HTML.BUTTON({
      "class": "photo-button"
    }, "Neem foto"), "\n\n				", Blaze.If(function() {
      return Spacebars.call(view.lookup("photo"));
    }, function() {
      return [ "\n					", HTML.IMG({
        "class": "the-photo",
        src: function() {
          return Spacebars.mustache(view.lookup("photo"));
        }
      }), "\n					", HTML.P("Aantal reacties: ", HTML.STRONG("(", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("commentCount"));
      }), ")")), "\n				" ];
    }), "\n\n				", HTML.UL("\n			      ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("comments"));
    }, function() {
      return [ "\n			        ", HTML.LI("\n			        	", HTML.STRONG(Blaze.View(function() {
        return Spacebars.mustache(view.lookup("username"));
      })), ": ", Blaze.View(function() {
        return Spacebars.mustache(view.lookup("text"));
      }), "\n						", HTML.BUTTON({
        "class": "delete"
      }, HTML.CharRef({
        html: "&times;",
        str: "×"
      })), "\n			        "), "\n			      " ];
    }), "\n			    "), "\n\n			    ", HTML.FORM({
      "class": "new-comment"
    }, "\n					", HTML.INPUT({
      type: "text",
      name: "text",
      placeholder: "Type to add a comment"
    }), "\n				"), "\n			"), "\n			", HTML.ASIDE("\n				", HTML.H2("Waar ben ik?"), "\n\n				", HTML.IMG({
      "class": "kaart",
      src: function() {
        return [ "http://maps.googleapis.com/maps/api/staticmap?center=", Spacebars.mustache(Spacebars.dot(view.lookup("loc"), "lat")), ",", Spacebars.mustache(Spacebars.dot(view.lookup("loc"), "lng")), "&zoom=15&size=300x300&maptype=roadmap&markers=color:blue%7C", Spacebars.mustache(Spacebars.dot(view.lookup("loc"), "lat")), ",", Spacebars.mustache(Spacebars.dot(view.lookup("loc"), "lng")) ];
      }
    }), "\n\n				", Blaze.If(function() {
      return Spacebars.call(view.lookup("error"));
    }, function() {
      return [ "\n					", HTML.P("Error: ", Blaze.View(function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("error"), "message"));
      })), "\n				" ];
    }), "\n			"), "\n		"), "\n	" ];
  }), HTML.Raw("\n	<footer>\n		<p>SRP: Meteor app prototyping - Jarno Verhoogt // 2015</p>\n	</footer>") ];
}));
Meteor.startup(Template.body.renderToDocument);

})();
