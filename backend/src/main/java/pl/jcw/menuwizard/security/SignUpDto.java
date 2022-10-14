package pl.jcw.menuwizard.security;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
public class SignUpDto {
  String name;
  String username;
  String email;
  String password;
}
