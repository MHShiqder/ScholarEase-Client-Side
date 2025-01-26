// import React, { PureComponent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const Chart = () => {
    const axiosSecure=useAxiosSecure()
    const { refetch, data: applications = [] } = useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
          const res = await axiosSecure.get("/allAppliedScholarship");
          return res.data;
        },
      });
    const data = applications.reduce((acc,items)=>{
        acc[items.university]=(acc[items.university]||0)+1;
        return acc;
    },{});
    const result=Object.entries(data).map(([key,value])=>({
        name:key,
        value:value,
    }))

      const renderLabel = ({ name }) => {
        return name; // Display the name of the slice
      };
      
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div className='flex items-center justify-center flex-col'> 
           
        <PieChart width={500} height={400}>
        <Pie
        data={result}
        dataKey="value"
        nameKey="name"
        cx="50%" // Center x-position
        cy="50%" // Center y-position
        outerRadius={100} // Radius of the pie chart
        fill="#8884d8"
        label={renderLabel} // Adds labels to slices
      >
        {result.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
          <Tooltip />
        </PieChart>
      <div>
        <h3 className='text-2xl font-bold text-center'>Ratio of students applied in an university</h3>
      </div>
        </div>
    );
};

export default Chart;







// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

//   render() {
//     return (
      
//     );
//   }
// }
