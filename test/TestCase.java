import org.junit.Test;
import static org.junit.Assert.*;

public class TestCase {
    @Test
    public void testHelloWorld() {
        assertEquals("Hello, world!", Main.getHelloMessage());
    }
}
