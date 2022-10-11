package pl.jcw.menuwizard.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RecipeService {

  private final RecipeRepository recipeRepository;

  @Transactional
  public RecipeDto saveRecipe(RecipeDto recipeDto) {
    Recipe recipe = mapToEntity(recipeDto);
    Recipe newRecipe = recipeRepository.save(recipe);
    return mapToDto(newRecipe);
  }

  @Transactional
  public Optional<RecipeDto> findRecipe(UUID id) {
    return recipeRepository.findById(id).map(this::mapToDto);
  }

  private Recipe mapToEntity(RecipeDto recipeDto) {
    Recipe recipe = new Recipe();
    if (recipeDto.getId() != null) {
      recipe.setId(recipeDto.getId());
    }
    recipe.setTitle(recipeDto.getTitle());
    recipe.setSteps(recipeDto.getSteps());
    return recipe;
  }

  private RecipeDto mapToDto(Recipe recipe) {
    return RecipeDto.builder()
        .id(recipe.getId())
        .title(recipe.getTitle())
        .steps(recipe.getSteps())
        .build();
  }
}
