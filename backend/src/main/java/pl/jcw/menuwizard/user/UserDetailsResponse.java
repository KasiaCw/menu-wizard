package pl.jcw.menuwizard.user;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Value
@Jacksonized
@Builder
public class UserDetailsResponse {
  String displayName;
  List<Role> roles;
}
