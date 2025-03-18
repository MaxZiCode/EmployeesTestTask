namespace EmployeesTestTask;

public static class Routes
{
    private const string ROUTES_URL = "api";

    public static class V1
    {
        private const string V1_URL = ROUTES_URL + "/v1.0";

        public const string EMPLOYEES = V1_URL + "/employees";
    }
}
