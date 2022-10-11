package pl.jcw.menuwizard.recipe;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

import java.util.UUID;

@Builder
@Value
@Jacksonized
public class RecipeDto {

  UUID id;
  String title;
  String steps;
}
