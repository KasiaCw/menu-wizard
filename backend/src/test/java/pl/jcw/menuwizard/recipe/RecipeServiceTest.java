package pl.jcw.menuwizard.recipe;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
class RecipeServiceTest {

  @Autowired RecipeService recipeService;
  @Autowired RecipeRepository recipeRepository;

  @AfterEach
  void cleanup() {
    recipeRepository.deleteAll();
  }

  @Test
  void shouldSaveAndReadRecipe() {
    // given
    RecipeDto newRecipe = recipeFixture().build();
    // when
    RecipeDto savedRecipe = recipeService.saveRecipe(newRecipe);

    Optional<RecipeDto> loadedRecipe = recipeService.findRecipe(savedRecipe.getId());

    // then
    assertThat(savedRecipe.getId()).isNotNull();
    assertThat(savedRecipe).usingRecursiveComparison().ignoringFields("id").isEqualTo(newRecipe);
    assertThat(loadedRecipe).isPresent().get().isEqualTo(savedRecipe);
  }

  @Test
  void shouldFindAllByDate() {
    // given
    RecipeDto myRecipe =
        recipeService.saveRecipe(
            recipeFixture()
                .title("Pizza")
                .steps("some steps")
                .recipeCreatedDate(LocalDateTime.now())
                .build());
    RecipeDto firstRecipe =
        recipeService.saveRecipe(
            recipeFixture()
                .title("Ciasto")
                .steps("3 steps")
                .recipeCreatedDate(LocalDateTime.now().plusSeconds(1))
                .build());
    RecipeDto goodRecipe =
        recipeService.saveRecipe(
            recipeFixture()
                .title("lody")
                .steps("more steps")
                .recipeCreatedDate(LocalDateTime.now().plusSeconds(2))
                .build());

    // when
    List<RecipeDto> allRecipes = recipeService.getAllRecipes();

    // then
    assertThat(allRecipes).containsExactly(goodRecipe, firstRecipe, myRecipe);
  }

  private RecipeDto.RecipeDtoBuilder recipeFixture() {
    return RecipeDto.builder()
        .title("test recipe")
        .ingredients("Test ingredients")
        .steps("Test recipe steps")
        .recipeCreatedDate(LocalDateTime.now());
  }

  @Test
  void shouldEditRecipe() {
    // given
    RecipeDto initialRecipe = (recipeService.saveRecipe(recipeFixture().build()));
    RecipeDto recipeEdit =
        recipeFixture()
            .id(initialRecipe.getId())
            .title("New Title")
            .ingredients("New ingredients")
            .steps("New steps")
            .build();

    // when
    RecipeDto saved = recipeService.editRecipe(recipeEdit);
    Optional<RecipeDto> recipeAfterEdit = recipeService.findRecipe(initialRecipe.getId());

    // then
    assertThat(recipeAfterEdit)
        .get()
        .usingRecursiveComparison()
        .isNotEqualTo(initialRecipe)
        .ignoringFields("recipeCreatedDate")
        .isEqualTo(recipeEdit);
  }
}
