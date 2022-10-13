package pl.jcw.menuwizard.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RecipeService {

  private final RecipeRepository recipeRepository;

  @Transactional
  public RecipeDto saveRecipe(RecipeDto recipeDto) {
    Recipe recipe = mapToEntity(recipeDto);
    if (recipe.getRecipeCreatedDate() == null) recipe.setRecipeCreatedDate(LocalDateTime.now());
    Recipe newRecipe = recipeRepository.save(recipe);
    return mapToDto(newRecipe);
  }

  @Transactional
  public Optional<RecipeDto> findRecipe(UUID id) {
    return recipeRepository.findById(id).map(this::mapToDto);
  }

  public List<RecipeDto> getAllRecipes() {
    return recipeRepository.findAll(Sort.by("recipeCreatedDate").descending()).stream()
        .map(this::mapToDto)
        .toList();
  }

  public RecipeDto editRecipe(RecipeDto recipeDto) {
    Recipe recipe =
        recipeRepository
            .findById(recipeDto.getId())
            .orElseThrow(() -> new ResourceNotFoundException("Recipe", "id", recipeDto.getId()));
    recipe.setTitle(recipeDto.getTitle());
    recipe.setIngredients(recipeDto.getIngredients());
    recipe.setSteps(recipeDto.getSteps());

    Recipe editRecipe = recipeRepository.save(recipe);
    return (mapToDto(editRecipe));
  }

  private Recipe mapToEntity(RecipeDto recipeDto) {
    Recipe recipe = new Recipe();
    if (recipeDto.getId() != null) {
      recipe.setId(recipeDto.getId());
    }
    recipe.setTitle(recipeDto.getTitle());
    recipe.setIngredients(recipeDto.getIngredients());
    recipe.setSteps(recipeDto.getSteps());
    recipe.setRecipeCreatedDate(recipeDto.getRecipeCreatedDate());
    return recipe;
  }

  private RecipeDto mapToDto(Recipe recipe) {
    return RecipeDto.builder()
        .id(recipe.getId())
        .title(recipe.getTitle())
        .ingredients(recipe.getIngredients())
        .steps(recipe.getSteps())
        .recipeCreatedDate(recipe.getRecipeCreatedDate())
        .build();
  }
}
