package pl.jcw.menuwizard.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
class AuthControllerTest {

  @Autowired AuthController authController;

  @Test
  void shouldRegisterAndAuthenticate() {
    // give
    SignUpDto signup =
        SignUpDto.builder()
            .email("test@gmail.com")
            .name("Test user")
            .username("test")
            .password("testpw")
            .build();
    LoginDto login =
        LoginDto.builder().username(signup.getUsername()).password(signup.getPassword()).build();

    // when
    ResponseEntity<?> responseEntity = authController.registerUser(signup);

    // then
    assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);

    // when
    ResponseEntity<JWTAuthResponse> jwtAuthResponseEntity = authController.authenticateUser(login);

    // then
    assertThat(jwtAuthResponseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    assertThat(jwtAuthResponseEntity.getBody().getTokenType()).isEqualTo("Bearer");
    assertThat(jwtAuthResponseEntity.getBody().getAccessToken()).isNotNull();
    // TODO implement assertion decoding JWT token and checking values
  }
}
