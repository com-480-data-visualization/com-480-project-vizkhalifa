# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Jonathan Doenz | 195210 |
| Asli Yörüsün   | 298828 |
| Aleksandar Hrusanov | 309750 |

[Milestone 1](#milestone-1-friday-3rd-april-5pm) • [Milestone 2](#milestone-2-friday-1st-may-5pm) • [Milestone 3](#milestone-3-thursday-28th-may-5pm)

## Milestone 1 (Friday 3rd April, 5pm)

### Dataset
The main goal of our project is to visualize migration movement. For that purpose, the main dataset we will use is the  [*Migration Flow dataset*](https://guyabel.com/publication/global-migration-estimates-by-gender/)  by Professor Guy Abel from the School of Sociology and Political Science at Shanghai University. As the migration flow is based on data about migration stock, the United Nations' [*Migration Stock dataset*](https://www.un.org/en/development/desa/population/migration/data/index.asp) might be used as an additional resource as well. This will give a global overview of the migration movement with some possible filtering, e.g. by sex and age. In addition, we will explore the feasibility of adding a more specialized visualizations of data based on a focus country or focus group of migrants (e.g. refugees and asylum-seekers).

Migration Flow, Migration Stock, and Refugee and Asylum-seekers datasets that we collected for further use in our project can be found [here](https://drive.google.com/drive/folders/1ee1mqCtkSrYlPuUuwxpouCaNwl1V3x9f?usp=sharing).

> Note: [2] <br/>
**Migration flows** refer to the number of migrants entering or leaving a given country during a given period of time, usually one calendar year. <br/>
**International migrant stock** is the number of people born in a country other than that in which they live. It also includes refugees.

### Problematic

Debates on migration often appear in the news. They usually focus on a singular event or group of people and try to elicit emotional reactions from the reader. It is therefore hard to have an objective idea of the scale of the global phenomenon outside of this particular instance. 

Our visualization proposes to offer this insight: you can see what is the migration flow from any country to any other averaged over 5 years. So the next time someone claims that there are too many immigrants from this particular country to that particular one, you have a mean to approve or disprove the claim. Besides, you can have an overview of what are the countries that have the highest (and lowest) numbers of immigrants overall and with respect to their total populations.

A recent such example is the European refugee crisis. Our attention was focused on this particular group of people migrating in the European Union from across the Mediterranean Sea or through Southeast Europe. While the media often presented this as a local one-off occurrence, the reality is way more constant and widespread. While this is a more specific example, it still is a big part of global migration.

### Exploratory Data Analysis

In this exploratory data analysis, we mainly focused on the *Migration
Flow dataset*, which contains the migration flows between any two countries 
aggregated over 5 years intervals from 1960 to 2015, for women and men separately.
The details of the analyses performed can be seen in the file `migration_datasets_EDA.ipynb`.
Here we display a subset of the results obtained.

We focused on the most recent time interval, i.e. 2010-2015 in the present analyses.
We first looked at the countries with the highest overall migrant inflows
without separating women and men.
We observed that the USA is the country with the largest inflow of migrants by far
as can be seen in the figure below.
![top_inflows](../assets/figures/2010_b_inflow_15_largest_sum.png "Top 15 countries in number of inflow migrants")

Looking at the largest migrants' *out*flows, we noticed the vast impact of 
the civil war undergoing in Syria since 2011.
![top_outflows](../assets/figures/2010_b_outflow_15_largest_sum.png "Top 15 countries in number of outflow migrants")

We then reproduced these analyses but divided the migrant flows by the local population size
to see the largest migrant flows _per-capita_.
We noticed the prevalence of Persian Gulf countries such as Oman, Kuwait, Qatar, UAE, Bahrain 
in the top of the per-capita inflow ranking, 
which is line with their infamously large foreign migrant workers taskforce.
![top_inflows_norm](../assets/figures/2010_b_inflow_15_largest_sum_norm.png "Top 15 countries in number of inflow migrants normalized")

We then investigated what were the flows with largest differences between women and men.
In the following figures, you can see the countries with the largest number of 
women migrants compared to men, for the sake of brevity we arbitrarily consider only outflows here.
The right panel shows the per-capita version.
![top_outlows_f_minus_m](../assets/figures/2010_f_minus_m_outflow_15_largest_sum.png "Top 15 countries with more women than men outflowing")

We can see that there is a majority of Syrian _women_ fleeing the country.

Now let's look at the opposite, i.e. the countries with the largest difference between women and men outflows, 
where men are more numerous.
![top_outlows_m_minus_f](../assets/figures/2010_m_minus_f_outflow_15_largest_sum.png "Top 15 countries with more men than women outflowing")

In the normalized plot, we note that Armenia stands well out from other countries with respect to its larger number of men outflowing compared to women.
Most of the emigration from Armenia is directed towards Russia and the much larger proportion of men seems to have cultural roots ([articles about this](https://www.univie.ac.at/alumni.ksa/wp-content/uploads/ASSA-SN-2017-01_Migration-and-its-impact-on-Armenia.pdf)).


### Related work

#### What others have already done with the data or similar?
The above mentioned Professor Guy Abel has made very significant work in
studying global migration as well as visualizing it. The two following papers from him are based on the datasets that we will
use.

-   [Estimates of Global Bilateral Migration Flows by Gender Between 1960 and 2015, by Guy J. Abel](https://www.oeaw.ac.at/fileadmin/subsites/Institute/VID/PDF/Publications/Working_Papers/WP2016_02.pdf)

- [Bilateral international migration flow estimates for 200 countries, by Guy Abel and Joel Cohen](https://www.nature.com/articles/s41597-019-0089-3)

Visualizations by Prof. Guy Abel:

-   [The global flow of people](http://download.gsb.bund.de/BIB/global_flow/)

-   [Migration stock as chord diagrams](https://guyabel.com/post/migrant-stock-chord-digrams/)

Researchers from University of Washington and The Nature Conservancy modeled potential habitat for 2954 species using climate change projections and the climatic needs of each species:

- [Animal migration ](http://maps.tnc.org/migrations-in-motion/#4/19.00/-78.00)

The other important work done by [1] shows fascinating visualisations about _Mapping internal connectivity through human migration in malaria endemic countries_, which we might consider to add our analysis.

-   [Internal migration flows in low and middle income countries](https://www.nature.com/articles/sdata201666). Additionally, the related dataset can be found [here](https://www.worldpop.org/project/categories?id=11).

#### Why is our approach original?
We were unable to find visualizations showing the migration flows directly on a world map and at the granularity of single countries.
The migration movement is just as important as the final raw numbers of migrants in a given country. We want to provide a more global picture of migration movement as well as to allow to easily compare the magnitude of migration flow between any countries in one place.


### References

[1] Sorichetta, A., Bird, T., Ruktanonchai, N. et al. Mapping internal connectivity through human migration in malaria endemic countries. Sci Data 3, 160066 (2016). (https://doi.org/10.1038/sdata.2016.66) <br/>
[2] Migration Data Portal, Immigration & emigration statistics (https://migrationdataportal.org/themes/international-migration-flows)

## Milestone 2 (Friday 1st May, 5pm)

**10% of the final grade**


## Milestone 3 (Thursday 28th May, 5pm)

**80% of the final grade**
