
class ReadOnlyVariable
{
    private final int id;
    
    public ReadOnlyVariable(int id){
        this.id = id;
    }
    public int getid(){
        return id;
    }
    
}

class Demo
{
    public static void main(String[] args){
        ReadOnlyVariable t1 = new ReadOnlyVariable(1001);
        System.out.println(t1.getid());
    }
}
