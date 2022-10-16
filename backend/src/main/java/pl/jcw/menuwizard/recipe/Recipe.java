package pl.jcw.menuwizard.recipe;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "recipe")
@Data
public class Recipe {

  @Id
  @Column(columnDefinition = "uuid")
  private UUID id = UUID.randomUUID();

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "ingredients", nullable = false, columnDefinition = "text")
  private String ingredients;

  @Column(name = "steps", nullable = false, columnDefinition = "text")
  private String steps;

  @Column(name = "recipe_created_date", nullable = false, columnDefinition = "datetime(9)")
  private LocalDateTime recipeCreatedDate;
}
