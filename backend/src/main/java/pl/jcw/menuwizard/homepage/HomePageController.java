package pl.jcw.menuwizard.homepage;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {

  @GetMapping("/")
  public String homepage(Model model) {
    return "index";
  }
}
