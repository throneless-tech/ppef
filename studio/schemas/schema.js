// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import gallery from "./gallery.js";
import healthcareNavigator from "./healthcareNavigator.js";
import imageStrata from "./imageStrata.js";
import navigatorItem from "./navigator.js";
import page from "./page.js";
import publication from "./publication.js";
import publicationsPage from "./publicationsPage.js";
import settings from "./settings.js";
import textStrata from "./textStrata.js";
import worldviewProgram from "./worldviewProgram.js";
import workshop from "./workshop.js";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    gallery,
    healthcareNavigator,
    imageStrata,
    navigatorItem,
    page,
    publication,
    publicationsPage,
    settings,
    textStrata,
    workshop,
    worldviewProgram
  ])
});
