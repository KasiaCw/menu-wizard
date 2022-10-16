package pl.jcw.menuwizard.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RecipiesInitializer implements InitializingBean {

    private final RecipeService recipeService;

    @Override
    public void afterPropertiesSet() {
        recipeService.saveRecipe(RecipeDto.builder()
                        .title("Pizza margherita")
                        .ingredients("""
                                # For the base
                                300g strong bread flour
                                1 tsp instant yeast (from a sachet or a tub)
                                1 tsp salt
                                1 tbsp olive oil, plus extra for drizzling
                                
                                # For the tomato sauce
                                100ml passata
                                handful fresh basil or 1 tsp dried
                                1 garlic clove, crushed
                                
                                # For the topping
                                125g ball mozzarella, sliced
                                handful grated or shaved parmesan (or vegetarian alternative)
                                handful of cherry tomatoes, halved
                                
                                # To finish
                                handful of basil leaves (optional)
                                """)
                        .steps("""
                                STEP 1
                                Make a batch of our white sourdough, following the recipe to the end of step 10. When the dough is ready,
                                tip it onto a lightly floured surface and divide into six equal pieces. 
                                Roll into balls and leave to rest on a floured tray, covered with a damp teatowel, 
                                in the fridge for at least 4 hrs, and up to 18 hrs – the longer you leave the dough, the more sour it will taste.
                                
                                STEP 2
                                Meanwhile, make the tomato sauce. Drain some of the juice from the plummed tomatoes and tip the rest into a bowl with the olive oil, 
                                oregano and a generous pinch of salt. 
                                Combine by either scrunching everything together with your fingers (this will make a chunky sauce) 
                                or blitz with a stick blender (this will make a smooth sauce). Chill until needed.
                                
                                STEP 3
                                To make the pizzas, heat a grill to high and prepare an ovenproof frying pan. On a floured surface, 
                                push and stretch a ball of dough into a circle roughly the same size as the pan. Get the pan very hot, 
                                then working quickly and carefully, drape it into the pan, spread over some of the sauce, 
                                a handful of mozzarella and some basil, if using.
                                
                                STEP 4
                                Cook for 2 mins, until little bubbles appear, 
                                then put the pan under the grill for another 2-4 mins until the sides are puffed up and the cheese has melted.
                                Remove, drizzle with a little olive oil and cut into wedges. 
                                Repeat with the remaining dough.
                                
                                Source: https://www.bbcgoodfood.com/recipes/sourdough-pizza
                                """)
                .build());
    }
}
