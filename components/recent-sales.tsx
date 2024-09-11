import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockData = [
  {
    name: 'Greenwood Medical Center',
    email: 'info@greenwoodmedical.com',
    sales: '2,500.00',
    avatarSrc: '/avatars/hospital01.png',
    avatarFallback: 'GM'
  },
  {
    name: 'Sunrise Hospital',
    email: 'contact@sunrisehospital.com',
    sales: '1,200.00',
    avatarSrc: '/avatars/hospital02.png',
    avatarFallback: 'SH'
  },
  {
    name: 'Riverdale Clinic',
    email: 'support@riverdaleclinic.com',
    sales: '750.00',
    avatarSrc: '/avatars/hospital03.png',
    avatarFallback: 'RC'
  },
  {
    name: 'Maple Leaf Hospital',
    email: 'info@mapleleafhospital.com',
    sales: '1,000.00',
    avatarSrc: '/avatars/hospital04.png',
    avatarFallback: 'ML'
  },
  {
    name: 'Pinecrest Health Center',
    email: 'contact@pinecresthealth.com',
    sales: '450.00',
    avatarSrc: '/avatars/hospital05.png',
    avatarFallback: 'PH'
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {mockData.map((hospital, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={hospital.avatarSrc} alt="Hospital Avatar" />
            <AvatarFallback>{hospital.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{hospital.name}</p>
            <p className="text-sm text-muted-foreground">{hospital.email}</p>
          </div>
          <div className="ml-auto font-medium">{hospital.sales}</div>
        </div>
      ))}
    </div>
  );
}
