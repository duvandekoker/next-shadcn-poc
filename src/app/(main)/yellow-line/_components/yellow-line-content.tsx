import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function YellowLineContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid @5xl/main:grid-cols-3 @xl/main:grid-cols-2 grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="font-semibold text-2xl tabular-nums">$1,250.00</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Up 12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Active Users</CardDescription>
            <CardTitle className="font-semibold text-2xl tabular-nums">8,492</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Up 3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Open Tickets</CardDescription>
            <CardTitle className="font-semibold text-2xl tabular-nums">142</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Down 8 from last week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>A summary of recent activity across your platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Content goes here. This could be a chart, table, or any other data visualization relevant to the yellow-line
            layout.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
