
class NoOfObjects
{
    static int noOfObjects = 0;
    {
        noOfObjects += 1;
    }
    public NoOfObjects(){
        
    }
	public static void main (String[] args)
	{
		NoOfObjects t1 = new NoOfObjects();
		NoOfObjects t2 = new NoOfObjects();
		NoOfObjects t3 = new NoOfObjects();
		System.out.println(NoOfObjects.noOfObjects);
	}
}
