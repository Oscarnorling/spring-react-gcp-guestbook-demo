//package se.oscarnorling.guestbook;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.sql.Timestamp;
//import java.util.Date;
//
//@Component
//public class DbLoader implements CommandLineRunner {
//    private final GuestbookRepository repository;
//
//    @Autowired
//    public DbLoader(GuestbookRepository repository) {
//        this.repository = repository;
//    }
//
//    @Override
//    public void run(String... strings) throws Exception {
//        Date date = new Date();
//        this.repository.save(new GuestbookEntry("Testsson", "Hallå där!", new Timestamp(date.getTime())));
//    }
//}
