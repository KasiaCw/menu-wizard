package pl.jcw.menuwizard.recipe;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RecipeServiceTest {

  @Autowired RecipeService recipeService;
  @Autowired RecipeRepository recipeRepository;

  @Test
  void shouldSaveAndReadRecipe() {
    // given
    RecipeDto newRecipe = RecipeDto.builder().title("New Recipe").steps("Steps").build();
    // when
    RecipeDto savedRecipe = recipeService.saveRecipe(newRecipe);

    Optional<RecipeDto> loadedRecipe = recipeService.findRecipe(savedRecipe.getId());

    // then
    assertThat(savedRecipe).usingRecursiveComparison().ignoringFields("id").isEqualTo(newRecipe);
    assertThat(loadedRecipe)
        .isPresent()
        .get()
        .isEqualTo(savedRecipe)
        .extracting(RecipeDto::getId)
        .isNotNull();
  }
}
