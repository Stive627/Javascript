import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/NewServlet")
public class NewServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setContentType("text/html");

        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String ageStr = request.getParameter("age");

        String errorMessage = validateInputs(name, email, ageStr);

        if (errorMessage.isEmpty()) {
            response.getWriter().println("<h1>Message Sent Successfully!</h1>");
            response.getWriter().println("<p>Name: " + name + "</p>");
            response.getWriter().println("<p>Email: " + email + "</p>");
            response.getWriter().println("<p>Age: " + ageStr + "</p>");
        } else {
            response.getWriter().println("<h1>Error:</h1>");
            response.getWriter().println("<p>" + errorMessage + "</p>");
        }
    }

    private String validateInputs(String name, String email, String ageStr) {
        if (name == null || name.trim().isEmpty()) {
            return "Name is required!";
        }
        if (email == null || !email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")) {
            return "Invalid email format!";
        }
        if (ageStr == null || !ageStr.matches("\\d+")) {
            return "Age must be a valid number!";
        }
        int age = Integer.parseInt(ageStr);
        if (age < 0 || age > 120) {
            return "Age must be between 0 and 120!";
        }
        return "";
    }
}
