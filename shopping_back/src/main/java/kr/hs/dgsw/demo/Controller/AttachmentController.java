package kr.hs.dgsw.demo.Controller;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URLConnection;

@RestController
public class AttachmentController {
    @GetMapping("/api/attachment/{name}")
    public void download(@PathVariable String name, HttpServletRequest request, HttpServletResponse response){
        try{
            String filePath = "D:/github/web_shoppingmall/web_shoppingmall/shopping_back/image/" + name;
            String fileName = name;
            File file = new File(filePath);
            if(file.exists() == false) return;

            String mimeType = URLConnection.guessContentTypeFromName(file.getName());
            if(mimeType == null){
                mimeType = "application/octet-stream";
            }

            response.setContentType(mimeType);
            response.setHeader("Content-Desposition","inline; filename=\""
                    + fileName + "\"");

            response.setContentLength((int) file.length());
            InputStream is = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(is, response.getOutputStream());
        } catch(Exception ex) {
            System.out.println(ex.getMessage());
        }
    }
}
