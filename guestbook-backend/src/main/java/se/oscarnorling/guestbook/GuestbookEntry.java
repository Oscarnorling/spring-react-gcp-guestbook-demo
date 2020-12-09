package se.oscarnorling.guestbook;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "guestbook_entries")
public class GuestbookEntry {
    @Id
    @GeneratedValue
    long id;

    @Column(name = "name")
    private String name;

    @Column(name = "message")
    private String message;

    @Column(name = "date")
    private Timestamp date;

    public GuestbookEntry() { }

    public GuestbookEntry(String name, String message, Timestamp date) {
        this.name = name;
        this.message = message;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }
}
