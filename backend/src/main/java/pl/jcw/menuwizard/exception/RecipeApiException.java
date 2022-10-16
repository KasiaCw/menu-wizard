package pl.jcw.menuwizard.exception;

import org.springframework.http.HttpStatus;

public class RecipeApiException extends RuntimeException {
  private final HttpStatus status;

  public RecipeApiException(HttpStatus status, String message) {
    super(message);
    this.status = status;
  }

  public HttpStatus getStatus() {
    return status;
  }
}
