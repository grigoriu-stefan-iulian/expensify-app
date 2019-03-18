public class Animal {
    private String name;
    private int weight;

}

abstract public class Creature {
    protected String name;
    protected int weight;
    protected String sound;

    public abstract void setName(String newName);
    public abstract void setWeight(double newWeight)
}

//Strategy Pattern
   // When you want to define a class that will have one behavior that is similar to other behaviors in a list
   // when you need to use one of several behaviors dinamically
   // Reduce long list of conditionals
   // Avoid duplicate code
   // Keeps class changes from forcing other class changes
   // Can hide complicated / secret code from the user
   // Negative: Increased number of Objects / Classes 
