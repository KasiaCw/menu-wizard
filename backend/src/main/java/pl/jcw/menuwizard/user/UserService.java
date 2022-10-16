package pl.jcw.menuwizard.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  private static UserDetailsResponse toUserDetails(User user) {
    return UserDetailsResponse.builder()
        .displayName(user.getName())
        .roles(user.getRoles().stream().toList())
        .build();
  }

  public Optional<UserDetailsResponse> getUserDetails(String username) {
    return userRepository.findByUsernameOrEmail(username, username).map(UserService::toUserDetails);
  }
}
