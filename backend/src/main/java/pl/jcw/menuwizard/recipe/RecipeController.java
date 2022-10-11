package pl.jcw.menuwizard.recipe;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recipies")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

  @Autowired RecipeService recipeService;

  @PostMapping
  public ResponseEntity<RecipeDto> saveRecipe(@RequestBody RecipeDto recipeDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(recipeService.saveRecipe(recipeDto));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<RecipeDto>> findRecipe(@PathVariable(name = "id") UUID id) {
    return ResponseEntity.ok(recipeService.findRecipe(id));
  }
}
