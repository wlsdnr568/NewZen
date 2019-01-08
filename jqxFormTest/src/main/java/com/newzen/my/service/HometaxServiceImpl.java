package com.newzen.my.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

@Service
public class HometaxServiceImpl implements HometaxService{


	@Override
	public String getBusnPersStatus(String busnPersNo, HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
	
		final String url = "https://teht.hometax.go.kr/wqAction.do?actionId=ATTABZAA001R08&screenId=UTEABAAA13&popupYn=false&realScreenId=";
		
		HttpURLConnection httpURLConnection = null;
		BufferedWriter bufferedWriter = null;
		
		String resultData = "";
		
		try {
			
			httpURLConnection = (HttpURLConnection) new URL(url).openConnection();
			httpURLConnection.setConnectTimeout(10000);
			httpURLConnection.setDoInput(true);
			httpURLConnection.setDoOutput(true);
			httpURLConnection.setUseCaches(false);
			httpURLConnection.setDefaultUseCaches(false);
			httpURLConnection.setRequestMethod("POST");
			httpURLConnection.setRequestProperty("Content-Type", "application/xml;charset=UTF-8");
			
			bufferedWriter = new BufferedWriter(new OutputStreamWriter(httpURLConnection.getOutputStream(), "UTF-8"));
			
			String xmlData = "";
			xmlData +="<map id='ATTABZAA001R08'>";
			xmlData +="<pubcUserNo/>";
			xmlData +="<mobYn>N</mobYn>";
			xmlData +="<inqrTrgtClCd>1</inqrTrgtClCd>";
			xmlData +="<txprDscmNo>"+busnPersNo.replaceAll("-", "")+"</txprDscmNo>";
			xmlData +="<dongCode>05</dongCode>";
			xmlData +="<map id='userReqInfoVO'/>";
			xmlData +="</map>";
			bufferedWriter.write(xmlData);
			bufferedWriter.flush();
			bufferedWriter.close();
			
			
			StringBuffer sb = new StringBuffer();
			BufferedReader bufferedReader = null;
			InputStream inputStream = null;
			
			inputStream = httpURLConnection.getInputStream();
			if (inputStream != null) {
				bufferedReader = new BufferedReader(new InputStreamReader(inputStream ,"UTF-8"));
				
				int read = 0;
				char[] cbuff = new char[1024];
				while ((read = bufferedReader.read(cbuff)) >0) {
					sb.append(cbuff, 0, read);
				}
				
			}
			
			resultData = URLDecoder.decode(sb.toString(), "UTF-8"); 
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (bufferedWriter != null) { bufferedWriter = null; }
			if (httpURLConnection != null) { httpURLConnection = null; }
		}
		
		response.setContentType("application/xml;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		return resultData;
	}
	
	


}
