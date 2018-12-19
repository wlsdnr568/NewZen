package com.my.test.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.my.test.model.User;
import com.my.test.service.LoginService;

@Controller
@RequestMapping(value="/")
public class LoginController {

	@Autowired
	LoginService loginService;
	
	@RequestMapping(value= {"","/","/login"}, method=RequestMethod.GET) 
	public String loginForm() {
		
		return "login";
	}
	
	@RequestMapping(value= {"/loginReq"}, method=RequestMethod.POST)
	public String login(Model model,HttpSession session,User user,RedirectAttributes ra) {
		
		String userId = user.getUserId();
		String userPw = user.getUserPw();
		
		boolean result = loginService.loginCheck(userId, userPw);
		
		if(result) {
			System.out.println("로그인 성공");
			session.setAttribute("userId", userId);
			return "redirect:/board/boardMain";
		}else {
			ra.addFlashAttribute("msg","로그인 실패");
			return "redirect:login";
		}
		
	}
	
	@RequestMapping(value= {"/logOut"})
	public String logOut(HttpSession session) {
		
		session.removeAttribute("userId");
		
		return "redirect:login";
	}
	
}




