#### BEM guidelines
    // CSS
    .block {} /* represents the higher level of an abstraction or component. */
    .block__element {} /* represents a descendent of .block that helps form .block as a whole. /*
    .block--modifier {} /* represents a different state or version of .block. */
    
#### SMACSS
    // Base rules
    Defining the default styling for how that element should look in all occurrences on the page. https://smacss.com/book/type-base
    
    // Module rules
    a Module is a more discrete component of the page. It is your navigation bars and your carousels 
    and your dialogs and your widgets and so on.https://smacss.com/book/type-module
    
    // State rules
    A state is something that augments and overrides all other styles.  
    Example: .is-xxx /* Describe the state of an element. For example .btn--is-primary */

#### Media object example: http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
    // HTML
    <div class="media">
        <img src="logo.png" alt="Foo Corp logo" class="media__img  media__img--rev">
        <div class="media__body">
            <h3 class="alpha">Welcome to Foo Corp</h3>
            <p class="lede">Foo Corp is the best, seriously!</p>
        </div>
    </div>
    
    // CSS
    /* ====== media ====== */
    .media {}
    .media__img {}
    .media__img--rev {}
    .media__body {}
    
#### SASS with OOCSS
    // HTML
    <a href="#" class="btn--twitter">Twitter</a>
    <a href="#" class="btn--facebook">Facebook</a>
    
    // CSS
    %button {}
    %twitter-background {}
    %facebook-background {}
    
    .btn {
      &--twitter {
        @extend %button;
        @extend %twitter-background;
      }
      &--facebook {
        @extend %button;
        @extend %facebook-background;
      }
    }
