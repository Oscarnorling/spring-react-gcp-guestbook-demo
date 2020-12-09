package se.oscarnorling.guestbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class GuestbookController {

    @Autowired
    private GuestbookRepository repository;

    //TODO Fixa responseEntity
    @GetMapping()
    public List<GuestbookEntry> getEntries() {
        return repository.findAll();
    }

    //TODO Fixa responseEntity
    @PostMapping()
    public void postEntry(@RequestBody GuestbookEntry guestbookEntry) {
        repository.save(guestbookEntry);
    }
}
